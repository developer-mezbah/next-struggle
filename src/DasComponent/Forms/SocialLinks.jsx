import React from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";

const SocialLinks = () => {
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Social Link"} />
      <form className="das-form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="facebook" className="das-label">
              Facebook
            </label>
            <textarea
              type="text"
              id="facebook"
              className="das-input"
              placeholder="Facebook Link"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="das-label">
              Linkedin
            </label>
            <textarea
              type="text"
              id="linkedin"
              className="das-input"
              placeholder="Linkedin Link"
            />
          </div>
          <div>
            <label htmlFor="github" className="das-label">
              Github
            </label>
            <textarea
              type="text"
              id="github"
              className="das-input"
              placeholder="Github Link"
            />
          </div>
          <div>
            <label htmlFor="medium" className="das-label">
              Medium
            </label>
            <textarea
              type="text"
              id="medium"
              className="das-input"
              placeholder="Medium Link"
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={true} />
        <SubmitButton text={"Submit"} submit={false} />
      </form>
    </div>
  );
};

export default SocialLinks;
