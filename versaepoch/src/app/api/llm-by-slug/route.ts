import { createClient } from '@/utils/supabase/client';
import { NextRequest, NextResponse } from 'next/server';
import { toCamelCase } from '@/utils/helperFunctions';

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

    const modelNameCorrect = modelName.replaceAll("-", " ");

    const { data: modelData, error } = await supabase
      .from('llms_directory')
      .select('*')
      .ilike('model_name', modelNameCorrect)
      .single();

    if (error) {
      if (error.details.includes('The result contains 0 rows')) {
        return NextResponse.json(
          { success: false, message: 'Model Not Found' },
          { status: 404 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            message:
              'Something went wrong. Please make sure you are looking for correct model.',
          },
          { status: 500 }
        );
      }
    }

    if (!modelData) {
      return NextResponse.json(
        { success: false, message: 'Model Not Found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, modelData: toCamelCase(modelData) });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
