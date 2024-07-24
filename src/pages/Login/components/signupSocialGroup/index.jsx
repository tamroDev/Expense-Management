import SignUpSocial from "../../../../components/SignUpSocial";

function SignupSocialGroup() {
  return (
    <div className="flex flex-col items-center">
      <SignUpSocial name={"Google"} />
      <SignUpSocial name={"Github"} social={"Github"} />
    </div>
  );
}

export default SignupSocialGroup;
