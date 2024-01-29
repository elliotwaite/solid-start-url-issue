import { createHandler } from '@solidjs/start/entry'
import { StartServer } from '@solidjs/start/server'
import PoppinsRegularURL from './fonts/Poppins-Regular.ttf'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.ttf"
            as="font"
            type="font/ttf"
            crossorigin=""
          />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
