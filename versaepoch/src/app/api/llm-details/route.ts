import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';
import { toCamelCase } from '@/utils/helperFunctions';

interface LLMDetailsRequest {
  modelName: string;
  modelId: string;
}

export async function POST(request: NextRequest) {
  try {
    const { modelName, modelId }: LLMDetailsRequest = await request.json();

    if (!modelId) {
      return NextResponse.json(
        { success: false, message: 'Model ID is required' },
        { status: 400 }
      );
    }

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
      .eq('id', modelId)
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to fetch model data',
        },
        { status: 500 }
      );
    }

    if (!modelData) {
      return NextResponse.json(
        { success: false, message: 'Model Not Found' },
        { status: 404 }
      );
    }

    const modelSlug = modelData.model_name.replaceAll(" ", "-");

    const cleanURL = `/llms/${modelSlug}`;

    return NextResponse.json({
      success: true,
      redirectUrl: cleanURL,
      modelData: toCamelCase(modelData),
      modelId: modelId,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
