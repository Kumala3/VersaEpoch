import { createClient } from '@/utils/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { modelName } = await request.json();

    if (!modelName) {
      return NextResponse.json(
        { success: false, message: 'Model Name is required' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    const { data: modelData, error } = await supabase
      .from('llms_directory')
      .select('*')
      .eq('model_name', modelName)
      .single();

    if (error) {
      if (error.details.includes('The result contains 0 rows')) {
        return NextResponse.json(
          { success: false, errorMessage: 'Model Not Found' },
          { status: 404 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            errorMessage:
              'Something went wrong. Please make sure you are looking for correct model.',
          },
          { status: 500 }
        );
      }
    }

    if (!modelData) {
      return NextResponse.json(
        { success: false, errorMessage: 'Model Not Found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, modelData: modelData });
  } catch {
    return NextResponse.json(
      { success: false, errorMessage: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
