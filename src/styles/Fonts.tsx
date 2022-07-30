import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Neon Zone';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('fonts/NeonZone.ttf') format('ttf');
      }
      `}
  />
)

export default Fonts