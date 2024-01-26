import {FC} from "react";

interface IStar {
  variant: "filled" | "empty"
}

const Star: FC<IStar> = ({variant}) => (
    variant === "filled" ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9.65433 0.962891L13.5056 5.75784L19.2559 7.93887L15.8858 13.0833L15.5884 19.2262L9.65433 17.6108L3.7202 19.2262L3.42288 13.0833L0.0527143 7.93887L5.80308 5.75784L9.65433 0.962891Z"
              fill="white"/>
        </svg>
    ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M10.3575 1.76135L13.8189 6.07094L13.9041 6.17707L14.0314 6.22534L19.1997 8.18561L16.1707 12.8094L16.0961 12.9232L16.0895 13.0592L15.8223 18.5803L10.4888 17.1283L10.3575 17.0926L10.2261 17.1283L4.89265 18.5803L4.62542 13.0592L4.61884 12.9232L4.54425 12.8094L1.51521 8.18561L6.68352 6.22534L6.81079 6.17707L6.89603 6.07094L10.3575 1.76135Z"
              stroke="white"/>
        </svg>

    )
)

export default Star;
