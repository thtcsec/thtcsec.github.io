import Header, { type HeaderProps } from "@/components/portfolio/Header";

const ProjectHeader = ({ backLink = "/", backLabel = "Back to Home" }: HeaderProps) => {
  return <Header backLink={backLink} backLabel={backLabel} />;
};

export default ProjectHeader;
