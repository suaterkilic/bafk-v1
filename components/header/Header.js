import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navigation from "./Navigation";
import RightHeader from "./RightHeader";
import SvgIcon from './SearchIcon';

const Header = (props) => {

  const [headerMode, setPath] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const uri = window.location.pathname;
      if(uri == '/category'){
        setPath('light')
        setLogo('-light');
      } else {
        setPath('default')
      }
  }, [])

  return (
    <Fragment>
      <Head>
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>BAFK Original</title>
      </Head>
      <style jsx>{`
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 600;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 600;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 600;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx1XHgciw.woff2)
            format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx0XHgciw.woff2)
            format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Qw3EZQNVED7rKGKxtqIqX5EUCEx6XHg.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }

        /* vietnamese */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUAnx4RHw.woff2) format("woff2");
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }

        /* latin-ext */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUA3x4RHw.woff2) format("woff2");
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }

        /* latin */
        @font-face {
          font-family: "Josefin Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(/fonts/Qw3aZQNVED7rKGKxtqIqX5EUDXx4.woff2) format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}</style>
      <SvgIcon />
      <header className={"site-header header-default header-color-" + headerMode + " header-has-bg"}>
        <div className="header-inner">
          <div className="header-wrapper grid-container">
            <div className="header-sections grid-x align-middle">
              <Navigation />
              <div className="site-branding cell shrink text-center">
                <Link href="/">
                  <a rel="home">
                    <img
                      className="site-logo"
                      src={"/logo/barberry-logo" + logo + ".svg"}
                      title="The Original"
                      alt="BAFK"
                    />
                    <img
                      className="site-logo-light"
                      src={"/logo/barberry-logo" + logo + ".svg"}
                      title="The Original"
                      alt="BAFK"
                    />
                    <img
                      className="sticky-logo"
                      src={"/logo/barberry-logo" + logo + ".svg"}
                      title="The Original"
                      alt="BAFK"
                    />
                  </a>
                </Link>
              </div>
              <RightHeader />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
