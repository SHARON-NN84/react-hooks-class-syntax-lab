import React from "react";

class Links extends React.Component {
  render() {
    const { github, linkedin } = this.props;
    return (
      <section>
        <h3>Links</h3>
        {github && <a href={github}>{github}</a>}
        {linkedin && <a href={linkedin}>{linkedin}</a>}
      </section>
    );
  }
}

export default Links;
