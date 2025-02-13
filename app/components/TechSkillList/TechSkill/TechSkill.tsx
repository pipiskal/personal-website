import { JSX } from "react";
import s from "./TechSkill.module.css";
import Icons from "../../Icon/Icons";
import Icon from "../../Icon/Icon";

type TechSkillProps = {
  iconName: keyof typeof Icons;
};

const TechSkill = ({ iconName }: TechSkillProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Icon name={iconName} w={32} h={32} />
    </div>
  );
};

export default TechSkill;
