import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { analyticsHtml, analyticsUrl } from '../helpers/analytics'

export default class extends Document {
  render () {
    return (
      <Html>
        <Head>
          <script
            async
            src={analyticsUrl}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: analyticsHtml
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
