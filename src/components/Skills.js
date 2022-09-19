import React from "react";
import { MDBIcon, MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit";
import SkillsInDepth from "./SkillsInDepth";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconsActive: 1,
      activeskill: this.props.inskill[0]["item"],
    };
    this.handleIconsClick = this.handleIconsClick.bind();
  }
  handleIconsClick = (e) => {
    const newActiveSkill = this.props.inskill[e - 1]["item"];
    this.setState((state, props) => ({
      activeskill: newActiveSkill,
      iconsActive: e,
    }));
  };
  render() {
    const skilllist = this.props.inskill.map((skill, i) => (
      <MDBTabsItem key={i}>
        <MDBTabsLink
          onMouseOver={(e) => this.handleIconsClick(skill.id)}
          active={this.state.iconsActive === i + 1}
        >
          <MDBIcon fas icon={skill.icon} className="me-2" /> {skill.item}
        </MDBTabsLink>
      </MDBTabsItem>
    ));

    return (
      <div className="homeassets">
        <h4>Interests</h4>
        <MDBTabs pills className="mb-3">
          {skilllist}
        </MDBTabs>

        <SkillsInDepth selectedSkill={this.state.activeskill} />
      </div>
    );
  }
}
export default Skills;
