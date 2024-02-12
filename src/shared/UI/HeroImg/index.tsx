import {FC} from "react";
import {SHeroImg, SHeroImgWrap} from "./styled";

interface IHeroImg {
  img: string
}
const HeroImg: FC<IHeroImg> = ({img}) => (
    <SHeroImgWrap>
      <SHeroImg src={img} alt="Фотография Тюмени" className="baikal-hero__img"/>
    </SHeroImgWrap>
)

export default HeroImg;
