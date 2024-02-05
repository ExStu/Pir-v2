import {FC, SyntheticEvent, useState} from "react";
import {SProgram, SProgramList, SProgramTabsWrap} from "./styled";
import Typography from "@Components/UI/Typography";
import {IProgram} from "./types";
import Tab from "@Components/UI/Tabs/Tab";
import Tabs from "@Components/UI/Tabs";
import {CustomTabPanel} from "@Components/UI/TabsCustom/CustomTabPanel.tsx";
import ProgramItem from "@Components/Sections/Program/ProgramItem";
import {AnimatePresence} from "framer-motion";
import {tabContentAnimation} from "./animations";

const Program: FC<IProgram> = ({items}) => {
  const [useTab, setTab] = useState(0)

  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
      <SProgram id="program">
        <Typography
            variant="h2"
            marginBottom={5}
            textAlign="center"
            textTransform="uppercase"
        >
          Программа Каникул
        </Typography>
        <SProgramTabsWrap>
          <Typography variant="h3" textTransform="uppercase" marginRight="auto">Расписание</Typography>
          <Tabs value={useTab} onChange={handleChangeTab}>
            {items.map((item, index) => (
                <Tab key={item.date} label={item.date} value={index}/>
            ))}
          </Tabs>
        </SProgramTabsWrap>
        {items.map((item, index) => (
            <CustomTabPanel index={useTab} value={index}>
              <AnimatePresence mode="wait">
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
}

export default Program;
