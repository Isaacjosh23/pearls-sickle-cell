import { IconProps, Icons } from "./_types";
import AnnounceIcon from "./announce";
import CareIcon from "./care";
import CheckIcon from "./check";
import CloseIcon from "./close";
import GavelIcon from "./gaval";
import MedicalIcon from "./medical";
import MenuIcon from "./menu";
import TargetIcon from "./target";
import TubeIcon from "./tube";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, className }: Props) {
  const props = { className };

  switch (type) {
    case Icons.Announce:
      return <AnnounceIcon {...props} />;

    case Icons.Care:
      return <CareIcon {...props} />;

    case Icons.Check:
      return <CheckIcon {...props} />;

    case Icons.Close:
      return <CloseIcon {...props} />;

    case Icons.Gavel:
      return <GavelIcon {...props} />;

    case Icons.Medical:
      return <MedicalIcon {...props} />;

    case Icons.Menu:
      return <MenuIcon {...props} />;

    case Icons.Target:
      return <TargetIcon {...props} />;

    case Icons.Tube:
      return <TubeIcon {...props} />;

    default:
      return null;
  }
}
