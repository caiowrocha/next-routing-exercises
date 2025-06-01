import React from 'react';

import Link from 'next/link';

function ScreenSaverHomePage() {
  return (
    <main>
      <p>
        Choose your color
      </p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/lavender">
            lavender
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/peachpuff">
            peachpuff
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverHomePage;
