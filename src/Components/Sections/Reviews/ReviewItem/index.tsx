import {FC} from "react";
import {IReviewItem} from "../types";
import {SReviewItem, SReviewItemPost} from "@Components/Sections/Reviews/ReviewItem/styled.ts";
import Typography from "@Components/UI/Typography";
import Link from "@Components/UI/Link";
import {useTheme} from "@mui/material";

const ReviewItem: FC<IReviewItem> = ({name, post, link, review}) => {
  const {palette} = useTheme()

  return (
      <SReviewItem>
        <Typography variant="t4" color={palette.uncategorized.reviewText}>{name}</Typography>
        <SReviewItemPost>
          <Typography variant="t5" sx={{fontSize: "14px"}} color={palette.uncategorized.reviewText}>{post}&nbsp;</Typography>
          {link && (
              <Link
                  sx={{textDecoration: "underline", fontSize: "14px", fontWeight: 700}}
                  variant="t5"
                  color={palette.main.primary}
                  href={link.href}
                  target="_blank"
              >
                {link.text}
              </Link>
          )}
        </SReviewItemPost>
        <Typography variant="t5" color={palette.uncategorized.reviewText}>{review}</Typography>
      </SReviewItem>
  )
}

export default ReviewItem;
