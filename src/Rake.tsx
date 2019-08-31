import React, { FC } from "react";

type RakeProps = {
  width?: number;
  height?: number;
  rotation?: number; // degrees
};

const Rake: FC<RakeProps> = ({ width = 52, height = 52, rotation = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 52 52`}
      transform={`rotate(${rotation})`}
    >
      <image
        id="rake"
        data-name="rake"
        width="52"
        height="52"
        href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA0CAYAAAAqunDVAAAByklEQVRoge2asU4CQRCGPxRDkEAssNDSwtKE3kcwFiRWlpQ+BdF3oLK0tSDyCFQWJpYWthYaKIwaDII5M5B1gV1CDuKY+ZINDPyzO//B7e7ljgAl4BboAIdANiQGCsCl6M+AXESfE11H8goRfVbq6EhdpYh+gnWgDQyldYFKJKcB9EX/BtQi+prohpLXiOgrUseoprbUOcFaoJNd5/3WHEe+7AyyCRQj+qLokLxyRJ+TOqbV94uQqZ4XDyKDfnpxP6L3v/fzffzx/frGhEypxUxpwUxpYZap4ZyfhYjp0+hvah+zTA2mJMSmaH/K/Yro/e9jS4Y//nBWTkZeE3PXzgKYkRU872jvgdfAoPvAthM/Ak8B/Q6w58TPwENAnyzWB078Adw5B/8FqI6MJnuqprP90Nyaoz1q658YGrVWZoET9s+TnEsnc0wCWuiLnx+qzmWD1tYXH+PZL+HIuRRIk1Pg2OkvOZmvljDOO3Czqn9U3fvl68secBXbpHwkTh3b0GrBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTGnBTC3Ihpfmx6mzClNd57G3nsTqSe5HXchjoudT7lelC/AN0j3mA+KK/mwAAAAASUVORK5CYII="
      />
    </svg>
  );
};

export default Rake;
