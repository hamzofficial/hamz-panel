import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';
// @ts-expect-error untyped font file
import font from '@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-display: swap;
        font-weight: 100 700;
        src: url(${font}) format('woff2-variations');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }

    body {
        ${tw`font-sans text-neutral-200`};
        letter-spacing: 0.015em;
        background:
            radial-gradient(ellipse at 12% 8%, rgba(124, 58, 237, .24), transparent 38%),
            radial-gradient(ellipse at 88% 82%, rgba(91, 33, 182, .18), transparent 34%),
            #090713;
        min-height: 100vh;
    }

    .hamz-app-shell { min-height: 100vh; }
    .hamz-sidebar {
        position: fixed; inset: 0 auto 0 0; z-index: 40; width: 252px;
        display: flex; flex-direction: column; padding: 26px 18px 18px;
        background: rgba(19, 13, 35, .72); border-right: 1px solid rgba(196, 181, 253, .13);
        backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
        box-shadow: 18px 0 60px rgba(0, 0, 0, .18);
    }
    .hamz-brand { display:flex; align-items:center; gap:12px; padding: 4px 8px 34px; text-decoration:none; }
    .hamz-brand-mark {
        display:grid; place-items:center; width:46px; height:46px; border-radius:15px;
        color:white; font-size:25px; font-weight:800; font-style:italic;
        background: linear-gradient(145deg,#c4b5fd,#7c3aed 58%,#4c1d95);
        box-shadow: 0 8px 30px rgba(139,92,246,.42), inset 0 1px 1px rgba(255,255,255,.5);
        text-shadow: 0 2px 4px rgba(35,10,75,.55);
    }
    .hamz-brand-copy { display:flex; flex-direction:column; line-height:1.15; }
    .hamz-brand-copy strong { color:#fff; font-size:18px; letter-spacing:.02em; text-shadow:0 2px 14px rgba(167,139,250,.5); }
    .hamz-brand-copy small { margin-top:5px; color:#a78bfa; font-size:9px; font-weight:700; letter-spacing:.22em; }
    .hamz-sidebar-section { display:flex; flex-direction:column; gap:8px; }
    .hamz-section-label { color:#8b7ca8; font-size:10px; font-weight:700; letter-spacing:.18em; padding:0 12px 8px; }
    .hamz-nav-link {
        display:flex; align-items:center; gap:13px; width:100%; min-height:46px; padding:0 13px;
        border:1px solid transparent; border-radius:13px; color:#b9afce; text-decoration:none;
        background:transparent; font-size:13px; font-weight:500; transition:all .18s ease; cursor:pointer;
    }
    .hamz-nav-link svg { width:16px; color:#9b83c9; }
    .hamz-nav-link:hover { color:#fff; background:rgba(167,139,250,.10); border-color:rgba(196,181,253,.10); }
    .hamz-nav-link.active { color:#fff; background:linear-gradient(100deg,rgba(124,58,237,.30),rgba(139,92,246,.10)); border-color:rgba(167,139,250,.24); box-shadow:inset 3px 0 #a78bfa,0 8px 24px rgba(76,29,149,.12); }
    .hamz-nav-link.active svg { color:#c4b5fd; }
    .hamz-search { display:flex; align-items:center; gap:12px; padding:11px 13px; color:#9b83c9; border:1px solid rgba(196,181,253,.12); border-radius:13px; background:rgba(255,255,255,.035); }
    .hamz-search > svg { width:15px; }
    .hamz-search > div { min-width:0; }
    .hamz-sidebar-spacer { flex:1; }
    .hamz-sidebar-footer { display:flex; flex-direction:column; gap:7px; padding-top:15px; border-top:1px solid rgba(196,181,253,.12); }
    .hamz-avatar { display:flex; width:18px; height:18px; overflow:hidden; }
    .hamz-logout { text-align:left; }
    .hamz-version { padding:13px 10px 0; color:#716585; font-size:10px; }
    .hamz-main { min-height:100vh; margin-left:252px; padding:0 34px 40px; }
    .hamz-topbar { display:flex; align-items:center; justify-content:space-between; min-height:82px; margin-bottom:25px; padding:0 5px 16px; border-bottom:1px solid rgba(196,181,253,.12); }
    .hamz-topbar > div { display:flex; flex-direction:column; gap:5px; }
    .hamz-topbar strong { color:#f5f0ff; font-size:20px; font-weight:650; }
    .hamz-eyebrow { color:#9b83c9; font-size:9px; font-weight:700; letter-spacing:.2em; }
    .hamz-status { display:flex; align-items:center; gap:8px; color:#a99abb; font-size:9px; font-weight:700; letter-spacing:.12em; }
    .hamz-status i { width:7px; height:7px; border-radius:50%; background:#a78bfa; box-shadow:0 0 12px #a78bfa; }
    @media (max-width: 800px) {
        .hamz-sidebar { width:72px; padding:18px 10px; align-items:center; }
        .hamz-brand { padding:0 0 28px; }
        .hamz-brand-copy,.hamz-section-label,.hamz-nav-link span:not(.hamz-avatar),.hamz-version,.hamz-search { display:none; }
        .hamz-nav-link { justify-content:center; padding:0; width:48px; }
        .hamz-sidebar-footer { width:100%; align-items:center; }
        .hamz-main { margin-left:72px; padding:0 16px 30px; }
    }
    @media (max-width: 480px) {
        .hamz-main { padding-left:12px; padding-right:12px; }
        .hamz-topbar { min-height:70px; }
        .hamz-status { display:none; }
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-neutral-200 leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px hsl(211, 10%, 53%), inset 0 0 0 4px hsl(209deg 18% 30%);
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;
