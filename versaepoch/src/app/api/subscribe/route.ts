import { NextRequest, NextResponse } from 'next/server';

interface SubscribeRequest {
  email: string;
  groupId?: string;
  signup_source?: string;
}

interface MailerLiteRequestBody {
  email: string;
  groups?: string[];
  fields?: {
    signup_source: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { email, groupId, signup_source }: SubscribeRequest =
      await request.json();

    if (!email || !email.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email is required',
          error: 'MISSING_EMAIL',
        },
        { status: 400 }
      );
    }

    const requestBody: MailerLiteRequestBody = {
      email: email.trim(),
    };

    if (groupId) {
      requestBody.groups = [groupId];
    }

    if (signup_source) {
      requestBody.fields = {
        signup_source: signup_source,
      };
    }

    try {
      const response = await fetch(
        'https://connect.mailerlite.com/api/subscribers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422) {
          return NextResponse.json(
            {
              success: false,
              message: 'This email is already exists',
              error: 'EMAIL_ALREADY_EXISTS',
            },
            { status: 422 }
          );
        } else {
          return NextResponse.json(
            {
              success: false,
              message: 'Internal Error',
              error: 'INTERNAL_ERROR',
            },
            { status: 500 }
          );
        }
      }

      // After all checks, return success case
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed!',
        data: data.data,
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to subscribe',
          error: 'NETWORK_ERROR',
        },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again',
        error: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}
