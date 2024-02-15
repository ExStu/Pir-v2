import styled from "@emotion/styled";
import mq from "@shared/themes/breakpoints";

export const SContainer = styled("div")(() => mq({
  maxWidth: "1298px",
  width: "100%",
  margin: "0 auto",
  padding: ["0 16px", "0 20px", "0 40px"],
}))