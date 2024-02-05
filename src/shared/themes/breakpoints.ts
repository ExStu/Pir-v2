import facepaint from "facepaint";

const breakpoints = [640, 1200, 1921];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default mq;
