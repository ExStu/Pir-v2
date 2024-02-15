import {forwardRef, SyntheticEvent, useState} from "react";
import {SProgram, SProgramList, SProgramTabsWrap} from "./styled";
import Typography from "@Components/UI/Typography";
import {IProgram} from "./types";
import Tab from "@Components/UI/Tabs/Tab";
import Tabs from "@Components/UI/Tabs";
import {CustomTabPanel} from "@Components/UI/TabsCustom/CustomTabPanel";
import ProgramItem from "@Components/Sections/Program/ProgramItem";
import {AnimatePresence} from "framer-motion";
import {tabContentAnimation} from "./animations";
import {useMediaQuery, useTheme} from "@mui/material";

const Program = forwardRef<HTMLElement, IProgram>(({items}, ref) => {
  const {breakpoints} = useTheme()
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const [useTab, setTab] = useState(0)
  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
      <SProgram id="program" ref={ref}>
        <Typography
            variant="h2"
            marginBottom={5}
            textAlign="center"
            textTransform="uppercase"
        >
          Программа Каникул
        </Typography>
        <SProgramTabsWrap>
          {/*<Typography textAlign="center" variant="h3" textTransform="uppercase" marginRight="auto">Расписание</Typography>*/}
          <Tabs variant="scrollable"
                scrollButtons={isMobile}
                allowScrollButtonsMobile={isMobile} value={useTab} onChange={handleChangeTab}>
            {items.map((item, index) => (
                <Tab wrapped key={item.date} label={item.date} value={index}/>
            ))}
          </Tabs>
        </SProgramTabsWrap>
        {items.map((item, index) => (
            <CustomTabPanel key={item.date} index={useTab} value={index}>
              <AnimatePresence mode="wait" key={item.date}>
                <SProgramList
                    variants={tabContentAnimation}
                    initial="hidden"
                    animate="visible"
                >
                  {item.tabContent.map((item) => (
                      <ProgramItem key={item.time} time={item.time} program={item.program}/>
                  ))}
                </SProgramList>

        </AnimatePresence>

      </CustomTabPanel>
        ))}
      </SProgram>
  )
})

export default Program;
