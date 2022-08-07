import AboutStyles from "./styles";

function About() {
  return (
    <AboutStyles>
      <h1>About</h1>
      <span>
        <p>This is a simple notebook app focused on providing a delightful user experience.</p>
        <br />
        <p>
          Built by{" "}
          <a href="https://antoniopataro.dev/" target={"_blank"}>
            antoniopataro
          </a>
          .
        </p>
      </span>
    </AboutStyles>
  );
}

export default About;
