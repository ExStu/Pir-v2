import React, {FC, useRef, Fragment} from "react";
import {IProjectItem} from "../types";
import {
  SProjectItem, SProjectItemDate, SProjectItemImg,
  SProjectItemLinkBtn, SProjectItemTitle, SProjectItemWrap,
  STextWrap
} from "./styled";
import {useMediaQuery, useTheme} from "@mui/material";
import ChevronRight from "@shared/UI/Icons/ChevronRight";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";

const ProjectItem: FC<IProjectItem> = ({date, title, image, route}) => {

  const {palette, breakpoints} = useTheme()
  const isTablet = useMediaQuery(breakpoints.down("md"))

  const ref = useRef<HTMLLIElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.6, -0.6], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.6, -0.6], ["53%", "63%"]);

  const handleMouseMove = (
      e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <SProjectItem
        initial="initial"
        whileHover="whileHover"
        ref={ref}
        onMouseMove={handleMouseMove}
    >
      <SProjectItemWrap>
        <STextWrap>
          <SProjectItemTitle
              variants={{
                initial: { x: 0 },
                whileHover: { x: 0 },
              }}
              transition={{
                type: "tween",
                staggerChildren: 0.075,
                delayChildren: 0.1,
              }}
          >
            {title.split(" ").map((word) => (
                    <Fragment key={word}>
                      {word.split("").map((letter, index) => (
                              <motion.span
                                  variants={{
                                    initial: { rotateX: 0 },
                                    whileHover: { rotateX: isTablet ? 0 : 360 },
                                  }}
                                  transition={{ type: "tween", duration: 0.3 }}
                                  key={index + letter}
                                  style={{display: "inline-block"}}
                              >
                                {letter}
                              </motion.span>
                          )
                      )}
                      &nbsp;
                    </Fragment>
                )
            )}
          </SProjectItemTitle>
          <SProjectItemDate className="project-item__date" variant="t2" color={palette.uncategorized.disabled} textTransform="uppercase">
            {date}
          </SProjectItemDate>
        </STextWrap>
        <SProjectItemLinkBtn variant="t2" href={route}>
          {route ? (
              <>
                Подробнее
                <ChevronRight/>
              </>

          )  : "Скоро"}

        </SProjectItemLinkBtn>
      </SProjectItemWrap>

        <SProjectItemImg
            style={{
              top,
              left,
              translateX: isTablet ? 0 : "-50%",
              translateY: isTablet ? 0 : "-50%",
            }}
            variants={{
              initial: { scale: isTablet ? 1 : 0, rotate: isTablet ? 0 : "-12.5deg", opacity: isTablet ? 1 : 0 },
              whileHover: { scale: 1, rotate: isTablet ? 0 : "12.5deg", opacity: 1 },
            }}
            transition={{ type: "spring" }}
            src={image}
            alt={title}
        />
    </SProjectItem>
  )
}

export default ProjectItem;
