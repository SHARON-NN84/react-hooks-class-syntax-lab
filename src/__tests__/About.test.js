import React from "react";

class About extends React.Component {
  render() {
    const { bio, links } = this.props;
    return (
      <section>
        {bio && bio !== "" && <p>{bio}</p>}
        {/* render links */}
      </section>
    );
  }
}

export default About;
