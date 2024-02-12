import {MotionConfig} from "framer-motion";
import {FC} from "react";
import {SBurgerBtn, SBurgerBtnLine} from "./styled";
import {VARIANTS} from "./animations";

interface IBurger {
  state: boolean
  toggleState: () => void
  invert: boolean
}
const Burger: FC<IBurger> = ({state, toggleState, invert}) => (

    <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
    >
      <SBurgerBtn
          initial={false}
          animate={state ? "open" : "closed"}
          onClick={toggleState}
      >
        <SBurgerBtnLine
            invert={invert}
            variants={VARIANTS.top}
            state={state}
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <SBurgerBtnLine
            variants={VARIANTS.middle}
            state={state}
            invert={invert}
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <SBurgerBtnLine
            variants={VARIANTS.bottom}
            state={state}
            invert={invert}
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
        />
      </SBurgerBtn>
    </MotionConfig>
)

export default Burger;