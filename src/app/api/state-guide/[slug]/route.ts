import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const VALID_SLUGS = [
    'assam',
    'arunachal-pradesh',
    'meghalaya',
    'nagaland',
    'manipur',
    'mizoram',
    'sikkim',
    'tripura',
];

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    if (!VALID_SLUGS.includes(slug)) {
        return new NextResponse('Not found', { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', 'state-guides', `${slug}.html`);

    let htmlContent: string;
    try {
        htmlContent = fs.readFileSync(filePath, 'utf-8');
    } catch {
        return new NextResponse('Guide not found', { status: 404 });
    }

    const fullPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${slug} Travel Guide</title>
  <style>
    :root {
      --color-text-primary: #111827;
      --color-text-secondary: #6b7280;
      --color-background-primary: #ffffff;
      --color-background-secondary: #f9fafb;
      --color-border-tertiary: #e5e7eb;
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      overflow-x: hidden;
      font-weight: 500;
    }
    p, li, span, div { font-weight: 500; }
    h1, h2, h3, h4 { font-weight: 700; }
  </style>
</head>
<body>
${htmlContent}
<script>
  // Notify parent of content height for auto-resize
  function sendHeight() {
    var h = document.body.scrollHeight;
    window.parent.postMessage({ type: 'guide-height', height: h }, '*');
  }
  window.addEventListener('load', sendHeight);
  window.addEventListener('resize', sendHeight);
  // Also run after a short delay to account for font loading
  setTimeout(sendHeight, 500);
  setTimeout(sendHeight, 1500);
</script>
</body>
</html>`;

    return new NextResponse(fullPage, {
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Frame-Options': 'SAMEORIGIN',
        },
    });
}
