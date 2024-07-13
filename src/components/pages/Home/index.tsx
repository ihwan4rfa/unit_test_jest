import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Typography from "@/components/ui/Typography";

const HomePage = () => {
  return (
    <div className="">
      <Typography>Add User</Typography><br />
      <Typography type="p">Form</Typography><br />
      <Input type="text" label="name" name={"name"} />
      <br /><br />
      <Input type="email" label="email" name={"email"} />
      <br /><br />
      <Input type="password" label="password" name={"password"} />
      <br /><br />
      <Button onClick={() => console.log("clicked")}>Save</Button>
    </div>
  );
};

export default HomePage;
