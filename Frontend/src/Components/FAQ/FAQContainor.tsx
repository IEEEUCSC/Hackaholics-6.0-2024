import React from "react";
import { styled } from "@mui/material/styles";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./FAQ.css";
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  color: "white",
  border: "none",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Define background colors for each accordion
const accordionColors = {
  panel1: "#18113A",
  panel2: "#ffffff",
  panel3: "#18113A",
  panel4: "#ffffff",
  panel5: "#18113A",
  panel6: "#ffffff",
  panel7: "#18113A",
  panel8: "#ffffff",
};

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ backgroundColor: accordionColors["panel1"] }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="accordianHeadOdd"
        >
          <Typography>What is Hackaholics 6.0?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedTextOdd">
            Hackaholics 6.0 is an Inter University Girls’ Only Hackathon
            organized by the IEEE WIE Student Branch Affinity Group of UCSC,
            held for the sixth consecutive year. As an Ideathon, it encourages
            female undergraduates to collaborate and address critical issues in
            the society through innovative solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ backgroundColor: accordionColors["panel2"] }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className="accordianHeadEven"
        >
          <Typography>Who can participate in Hackaholics 6.0?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedText">
            The event is open to female undergraduates. Teams of three students
            from the same university can participate in the hackathon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ backgroundColor: accordionColors["panel3"] }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          className="accordianHeadOdd"
        >
          <Typography>How can I participate?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedTextOdd">
            To participate, form a team of three students from your university.
            Submit your innovative ideas during the initial round, and if
            selected, proceed to the final hackathon where you'll present UI
            prototypes and solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ backgroundColor: accordionColors["panel4"] }}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          className="accordianHeadEven"
        >
          <Typography>
            How will the Scholarship Awareness Session benefit me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedText">
            The session aims to provide valuable insights into various
            scholarships and internship programs, empowering you with knowledge
            about opportunities that can enhance your academic and professional
            journey.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ backgroundColor: accordionColors["panel5"] }}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          className="accordianHeadOdd"
        >
          <Typography>Do participants need coding skills?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedTextOdd">
            While coding skills can be beneficial, they are not mandatory. Teams
            can include members with diverse skills, and participants without a
            coding background can contribute ideas, creativity, and other
            expertise.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        sx={{ backgroundColor: accordionColors["panel6"] }}
      >
        <AccordionSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          className="accordianHeadEven"
        >
          <Typography>
            What if I don't have experience in UI Prototyping?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedText">
            No worries! Participants without UI Prototyping experience are still
            encouraged to join. The event provides an opportunity to learn and
            collaborate with others who may have expertise in this area.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        sx={{ backgroundColor: accordionColors["panel7"] }}
      >
        <AccordionSummary
          aria-controls="panel7d-content"
          id="panel7d-header"
          className="accordianHeadOdd"
        >
          <Typography>
            How are the teams selected for the final hackathon?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedTextOdd">
            The top 10 teams are selected based on the creativity,
            innovativeness, and feasibility of their proposed ideas in the
            initial round.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        sx={{ backgroundColor: accordionColors["panel8"] }}
      >
        <AccordionSummary
          aria-controls="panel8d-content"
          id="panel8d-header"
          className="accordianHeadEven"
        >
          <Typography>
            Can you elaborate on the two rounds of the final day?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="expandedText">
            In the first round, the top ten teams must pitch their proposed
            ideas to the judging panel, out of which, the top five teams will be
            selected based on various criteria, including innovation,
            creativity, design aesthetics, feasibility, presentation skills, and
            market potential. In the final round, the teams face a challenge
            presented by the judging panel, where they must showcase their
            adaptability and prowess in real-time, crafting innovative solutions
            on the spot.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
