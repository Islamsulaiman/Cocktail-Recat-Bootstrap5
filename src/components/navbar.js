import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class='navbar navbar-light bg-light navbar-expand-lg p-6 border-bottom border-3 shadow'>
        <div class='container'>
          <a href='#' class='navbar-brand'>
            <svg
              width='170'
              height='20'
              viewBox='0 0 306 29'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.925 2.8C19.333 2.8 19.669 2.944 19.933 3.232C20.221 3.496 20.365 3.832 20.365 4.24V8.092C20.365 8.884 20.041 9.28 19.393 9.28H18.493C17.845 9.28 17.521 8.884 17.521 8.092V5.644H12.085V25.156H13.021C13.813 25.156 14.209 25.48 14.209 26.128V27.028C14.209 27.676 13.813 28 13.021 28H7.90896C7.14096 28 6.75696 27.676 6.75696 27.028V26.128C6.75696 25.48 7.14096 25.156 7.90896 25.156H8.84496V5.644H3.40896V8.092C3.40896 8.884 3.08496 9.28 2.43696 9.28H1.53696C0.888963 9.28 0.564963 8.884 0.564963 8.092V4.24C0.564963 3.832 0.696963 3.496 0.960963 3.232C1.22496 2.944 1.56096 2.8 1.96896 2.8H18.925ZM45.5756 25.156C46.3437 25.156 46.7277 25.48 46.7277 26.128V27.028C46.7277 27.676 46.3437 28 45.5756 28H40.4636C39.6956 28 39.3116 27.676 39.3116 27.028V26.128C39.3116 25.48 39.6956 25.156 40.4636 25.156H41.3996V18.208C41.3996 16.12 41.1236 14.644 40.5716 13.78C40.0436 12.892 39.1436 12.448 37.8716 12.448C36.9836 12.448 36.1196 12.748 35.2796 13.348C34.4636 13.924 33.7916 14.68 33.2636 15.616C32.7596 16.552 32.5076 17.536 32.5076 18.568V25.156H33.4436C34.2356 25.156 34.6316 25.48 34.6316 26.128V27.028C34.6316 27.676 34.2356 28 33.4436 28H28.3676C27.5756 28 27.1796 27.676 27.1796 27.028V26.128C27.1796 25.48 27.5756 25.156 28.3676 25.156H29.3036V4.204H28.3676C27.5756 4.204 27.1796 3.88 27.1796 3.232V2.332C27.1796 1.684 27.5756 1.36 28.3676 1.36H31.2116C31.5716 1.36 31.8716 1.492 32.1116 1.756C32.3756 1.996 32.5076 2.308 32.5076 2.692V14.032C33.0356 12.784 33.8756 11.74 35.0276 10.9C36.1796 10.06 37.3796 9.64 38.6276 9.64C40.6196 9.64 42.1196 10.324 43.1276 11.692C44.1356 13.036 44.6396 15.04 44.6396 17.704V25.156H45.5756ZM69.5978 18.1C69.5978 18.22 69.5618 18.748 69.4898 19.684H56.7098C56.8298 21.508 57.3578 22.948 58.2938 24.004C59.2298 25.036 60.4778 25.552 62.0378 25.552C63.0938 25.552 63.9338 25.384 64.5578 25.048C65.1818 24.712 65.7698 24.112 66.3218 23.248C66.5138 22.96 66.6938 22.756 66.8618 22.636C67.0538 22.516 67.2698 22.456 67.5098 22.456C67.8698 22.456 68.1818 22.576 68.4458 22.816C68.7338 23.032 68.8778 23.308 68.8778 23.644C68.8778 24.1 68.7098 24.568 68.3738 25.048C67.6778 26.176 66.8138 27.016 65.7818 27.568C64.7498 28.096 63.4658 28.36 61.9298 28.36C60.2258 28.36 58.7258 27.964 57.4298 27.172C56.1578 26.38 55.1618 25.264 54.4418 23.824C53.7458 22.384 53.3978 20.728 53.3978 18.856C53.3978 17.008 53.7458 15.388 54.4418 13.996C55.1378 12.604 56.1218 11.536 57.3938 10.792C58.6658 10.024 60.1418 9.64 61.8218 9.64C64.1498 9.64 66.0218 10.384 67.4378 11.872C68.8778 13.36 69.5978 15.436 69.5978 18.1ZM61.7498 12.304C60.3338 12.304 59.1938 12.736 58.3298 13.6C57.4898 14.44 56.9738 15.664 56.7818 17.272H66.3218C66.2978 13.96 64.7738 12.304 61.7498 12.304ZM266.519 2.8C270.359 2.8 273.311 3.844 275.375 5.932C277.463 7.996 278.507 10.96 278.507 14.824C278.507 17.488 278.015 19.816 277.031 21.808C276.047 23.776 274.643 25.3 272.819 26.38C270.995 27.46 268.859 28 266.411 28H258.275C257.483 28 257.087 27.676 257.087 27.028V26.128C257.087 25.48 257.483 25.156 258.275 25.156H259.211V5.644H258.275C257.483 5.644 257.087 5.32 257.087 4.672V3.772C257.087 3.124 257.483 2.8 258.275 2.8H266.519ZM266.087 25.156C269.015 25.156 271.259 24.268 272.819 22.492C274.403 20.716 275.195 18.196 275.195 14.932C275.195 11.788 274.463 9.46 272.999 7.948C271.535 6.412 269.303 5.644 266.303 5.644H262.451V25.156H266.087ZM301.066 14.284C302.65 14.692 303.862 15.424 304.702 16.48C305.566 17.536 305.998 18.832 305.998 20.368C305.998 22.768 305.098 24.64 303.298 25.984C301.498 27.328 298.978 28 295.738 28H287.926C287.134 28 286.738 27.676 286.738 27.028V26.128C286.738 25.48 287.134 25.156 287.926 25.156H288.862V5.644H287.926C287.134 5.644 286.738 5.32 286.738 4.672V3.772C286.738 3.124 287.134 2.8 287.926 2.8H296.134C301.942 2.8 304.846 4.78 304.846 8.74C304.846 9.964 304.522 11.044 303.874 11.98C303.226 12.916 302.29 13.684 301.066 14.284ZM292.102 5.644V13.456H295.702C297.598 13.456 299.038 13.108 300.022 12.412C301.03 11.692 301.534 10.66 301.534 9.316C301.534 7.996 301.09 7.06 300.202 6.508C299.314 5.932 297.838 5.644 295.774 5.644H292.102ZM295.27 25.156C297.862 25.156 299.746 24.772 300.922 24.004C302.098 23.236 302.686 22 302.686 20.296C302.686 17.632 300.682 16.3 296.674 16.3H292.102V25.156H295.27Z'
                fill='#222222'
              />
              <path
                d='M94.2122 19.324C94.9562 19.324 95.5802 19.528 96.0842 19.936C96.6122 20.344 96.8762 20.872 96.8762 21.52C96.8762 21.832 96.7922 22.252 96.6242 22.78C96.4802 23.284 96.2882 23.728 96.0482 24.112C95.1842 25.576 94.0922 26.656 92.7722 27.352C91.4522 28.024 89.8202 28.36 87.8762 28.36C85.6442 28.36 83.7002 27.82 82.0442 26.74C80.3882 25.66 79.1162 24.124 78.2282 22.132C77.3402 20.14 76.8962 17.824 76.8962 15.184C76.8962 12.568 77.3282 10.3 78.1922 8.38C79.0562 6.46 80.3162 4.996 81.9722 3.988C83.6282 2.956 85.6082 2.44 87.9122 2.44C89.5922 2.44 91.1162 2.704 92.4842 3.232C93.8522 3.76 94.9202 4.504 95.6882 5.464C96.4802 6.4 96.8762 7.456 96.8762 8.632C96.8762 9.736 96.5522 10.636 95.9042 11.332C95.2562 12.004 94.4042 12.34 93.3482 12.34C92.2922 12.34 91.4402 12.052 90.7922 11.476C90.1442 10.9 89.8202 10.132 89.8202 9.172C89.8202 8.668 89.9042 8.212 90.0722 7.804C89.5682 7.54 88.8842 7.408 88.0202 7.408C86.2442 7.408 84.9722 8.02 84.2042 9.244C83.4362 10.468 83.0522 12.4 83.0522 15.04C83.0522 17.848 83.4722 19.948 84.3122 21.34C85.1522 22.708 86.4842 23.392 88.3082 23.392C89.1482 23.392 89.8442 23.212 90.3962 22.852C90.9722 22.468 91.4642 21.856 91.8722 21.016C92.2082 20.344 92.5322 19.9 92.8442 19.684C93.1802 19.444 93.6362 19.324 94.2122 19.324ZM112.583 28.36C109.703 28.36 107.471 27.568 105.887 25.984C104.327 24.376 103.547 22.12 103.547 19.216C103.547 16.216 104.375 13.876 106.031 12.196C107.687 10.492 110.003 9.64 112.979 9.64C115.859 9.64 118.079 10.432 119.639 12.016C121.199 13.6 121.979 15.844 121.979 18.748C121.979 21.748 121.151 24.1 119.495 25.804C117.839 27.508 115.535 28.36 112.583 28.36ZM112.619 23.5C113.771 23.5 114.611 23.128 115.139 22.384C115.667 21.64 115.931 20.452 115.931 18.82C115.931 17.332 115.679 16.24 115.175 15.544C114.695 14.848 113.939 14.5 112.907 14.5C110.699 14.5 109.595 16.048 109.595 19.144C109.595 22.048 110.603 23.5 112.619 23.5ZM142.423 21.7C143.047 21.7 143.575 21.88 144.007 22.24C144.439 22.576 144.655 23.056 144.655 23.68C144.655 24.4 144.439 25.036 144.007 25.588C143.407 26.38 142.567 27.04 141.487 27.568C140.431 28.096 139.183 28.36 137.743 28.36C135.775 28.36 134.071 27.976 132.631 27.208C131.215 26.416 130.135 25.312 129.391 23.896C128.647 22.456 128.275 20.8 128.275 18.928C128.275 17.032 128.659 15.388 129.427 13.996C130.219 12.58 131.311 11.5 132.703 10.756C134.095 10.012 135.679 9.64 137.455 9.64C138.871 9.64 140.155 9.892 141.307 10.396C142.483 10.9 143.407 11.596 144.079 12.484C144.751 13.372 145.087 14.356 145.087 15.436C145.087 16.396 144.763 17.188 144.115 17.812C143.467 18.412 142.615 18.712 141.559 18.712C140.503 18.712 139.651 18.424 139.003 17.848C138.355 17.272 138.031 16.504 138.031 15.544C138.031 15.328 138.055 15.052 138.103 14.716C137.839 14.572 137.515 14.5 137.131 14.5C135.259 14.5 134.323 15.952 134.323 18.856C134.323 20.248 134.647 21.376 135.295 22.24C135.943 23.08 136.855 23.5 138.031 23.5C138.631 23.5 139.111 23.428 139.471 23.284C139.831 23.116 140.239 22.84 140.695 22.456C141.319 21.952 141.895 21.7 142.423 21.7ZM170.325 23.032C170.853 23.032 171.273 23.164 171.585 23.428C171.921 23.692 172.089 24.112 172.089 24.688V26.344C172.089 26.92 171.921 27.34 171.585 27.604C171.273 27.868 170.853 28 170.325 28H166.041C165.777 28 165.525 27.94 165.285 27.82C165.069 27.7 164.889 27.532 164.745 27.316L159.057 19.252V23.032H159.561C160.089 23.032 160.509 23.164 160.821 23.428C161.157 23.692 161.325 24.112 161.325 24.688V26.344C161.325 26.92 161.157 27.34 160.821 27.604C160.509 27.868 160.089 28 159.561 28H152.613C152.085 28 151.653 27.868 151.317 27.604C151.005 27.34 150.849 26.92 150.849 26.344V24.688C150.849 24.112 151.005 23.692 151.317 23.428C151.653 23.164 152.085 23.032 152.613 23.032H153.117V6.328H152.613C152.085 6.328 151.653 6.196 151.317 5.932C151.005 5.668 150.849 5.248 150.849 4.672V3.016C150.849 2.44 151.005 2.02 151.317 1.756C151.653 1.492 152.085 1.36 152.613 1.36H157.221C157.749 1.36 158.181 1.54 158.517 1.9C158.877 2.236 159.057 2.668 159.057 3.196V18.352L161.757 16.12C162.693 15.352 163.665 14.968 164.673 14.968H162.765C162.237 14.968 161.805 14.836 161.469 14.572C161.157 14.308 161.001 13.888 161.001 13.312V11.656C161.001 11.08 161.157 10.66 161.469 10.396C161.805 10.132 162.237 10 162.765 10H170.073C170.601 10 171.021 10.132 171.333 10.396C171.669 10.66 171.837 11.08 171.837 11.656V13.312C171.837 13.888 171.669 14.308 171.333 14.572C171.021 14.836 170.601 14.968 170.073 14.968H169.137L165.285 18.028L168.813 23.032H170.325ZM191.505 21.556C192.153 21.556 192.705 21.76 193.161 22.168C193.641 22.576 193.881 23.08 193.881 23.68C193.881 24.376 193.665 25.012 193.233 25.588C191.841 27.436 190.041 28.36 187.833 28.36C183.033 28.36 180.633 25.708 180.633 20.404V14.86H179.481C178.953 14.86 178.509 14.692 178.149 14.356C177.813 13.996 177.645 13.552 177.645 13.024V11.836C177.645 11.308 177.813 10.876 178.149 10.54C178.509 10.18 178.953 10 179.481 10H180.633V6.832C180.633 6.304 180.801 5.872 181.137 5.536C181.497 5.176 181.941 4.996 182.469 4.996H184.737C185.265 4.996 185.697 5.176 186.033 5.536C186.393 5.872 186.573 6.304 186.573 6.832V10H190.101C190.629 10 191.061 10.18 191.397 10.54C191.757 10.876 191.937 11.308 191.937 11.836V13.024C191.937 13.552 191.757 13.996 191.397 14.356C191.061 14.692 190.629 14.86 190.101 14.86H186.573V21.412C186.573 22.036 186.717 22.54 187.005 22.924C187.293 23.308 187.665 23.5 188.121 23.5C188.481 23.5 188.793 23.416 189.057 23.248C189.321 23.08 189.597 22.816 189.885 22.456C190.125 22.144 190.353 21.916 190.569 21.772C190.809 21.628 191.121 21.556 191.505 21.556ZM216.393 23.032C216.921 23.032 217.341 23.164 217.653 23.428C217.989 23.692 218.157 24.112 218.157 24.688V26.344C218.157 26.92 217.989 27.34 217.653 27.604C217.341 27.868 216.921 28 216.393 28H211.785C211.257 28 210.813 27.832 210.453 27.496C210.117 27.136 209.949 26.692 209.949 26.164V24.688C209.469 25.792 208.773 26.68 207.861 27.352C206.973 28.024 206.013 28.36 204.981 28.36C203.349 28.36 202.029 27.868 201.021 26.884C200.013 25.9 199.509 24.604 199.509 22.996C199.509 21.124 200.097 19.756 201.273 18.892C202.473 18.004 204.333 17.56 206.853 17.56C207.717 17.56 208.749 17.656 209.949 17.848V16.66C209.949 15.892 209.721 15.28 209.265 14.824C208.833 14.368 208.233 14.14 207.465 14.14C207.009 14.14 206.637 14.224 206.349 14.392C206.157 15.064 205.785 15.616 205.233 16.048C204.705 16.456 204.081 16.66 203.361 16.66C202.449 16.66 201.705 16.396 201.129 15.868C200.577 15.34 200.301 14.656 200.301 13.816C200.301 12.52 200.949 11.5 202.245 10.756C203.541 10.012 205.245 9.64 207.357 9.64C210.189 9.64 212.313 10.336 213.729 11.728C215.169 13.12 215.889 15.088 215.889 17.632V23.032H216.393ZM206.925 24.148C207.669 24.148 208.329 23.824 208.905 23.176C209.481 22.504 209.817 21.676 209.913 20.692C209.097 20.596 208.377 20.548 207.753 20.548C206.913 20.548 206.313 20.704 205.953 21.016C205.617 21.328 205.449 21.856 205.449 22.6C205.449 23.056 205.593 23.428 205.881 23.716C206.169 24.004 206.517 24.148 206.925 24.148ZM228.603 8.02C227.571 8.02 226.695 7.672 225.975 6.976C225.279 6.256 224.931 5.38 224.931 4.348C224.931 3.292 225.279 2.416 225.975 1.72C226.695 1.024 227.571 0.675998 228.603 0.675998C229.659 0.675998 230.535 1.024 231.231 1.72C231.927 2.416 232.275 3.292 232.275 4.348C232.275 5.38 231.927 6.256 231.231 6.976C230.535 7.672 229.659 8.02 228.603 8.02ZM225.795 28C225.267 28 224.835 27.868 224.499 27.604C224.187 27.34 224.031 26.92 224.031 26.344V24.688C224.031 24.112 224.187 23.692 224.499 23.428C224.835 23.164 225.267 23.032 225.795 23.032H226.299V14.968H225.795C225.267 14.968 224.835 14.836 224.499 14.572C224.187 14.308 224.031 13.888 224.031 13.312V11.656C224.031 11.08 224.187 10.66 224.499 10.396C224.835 10.132 225.267 10 225.795 10H230.403C230.931 10 231.363 10.18 231.699 10.54C232.059 10.876 232.239 11.308 232.239 11.836V23.032H232.743C233.271 23.032 233.691 23.164 234.003 23.428C234.339 23.692 234.507 24.112 234.507 24.688V26.344C234.507 26.92 234.339 27.34 234.003 27.604C233.691 27.868 233.271 28 232.743 28H225.795ZM241.65 28C241.122 28 240.69 27.868 240.354 27.604C240.042 27.34 239.886 26.92 239.886 26.344V24.688C239.886 24.112 240.042 23.692 240.354 23.428C240.69 23.164 241.122 23.032 241.65 23.032H242.154V6.328H241.65C241.122 6.328 240.69 6.196 240.354 5.932C240.042 5.668 239.886 5.248 239.886 4.672V3.016C239.886 2.44 240.042 2.02 240.354 1.756C240.69 1.492 241.122 1.36 241.65 1.36H246.258C246.786 1.36 247.218 1.54 247.554 1.9C247.914 2.236 248.094 2.668 248.094 3.196V23.032H248.598C249.126 23.032 249.546 23.164 249.858 23.428C250.194 23.692 250.362 24.112 250.362 24.688V26.344C250.362 26.92 250.194 27.34 249.858 27.604C249.546 27.868 249.126 28 248.598 28H241.65Z'
                fill='#476A2E'
              />
            </svg>
          </a>
          <button
            type='button'
            class='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarResponsiveRight'
            aria-controls='navbarResponsiveRight'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='collapse navbar-collapse d-flex justify-content-end'
            id='navbarResponsiveRight'
          >
            <ul class='navbar-nav'>
              <li class='nav-item'>
                <Link
                  to='/'
                  class='nav-link active h5 text-muted'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <Link
                  to='/about'
                  class='nav-link h5 text-muted'
                  aria-current='page'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
