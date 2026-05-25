import { IconProps, Icons } from "./_types";
import AnnounceIcon from "./announce";
import CalenderIcon from "./calender";
import CallIcon from "./call";
import CareIcon from "./care";
import CheckIcon from "./check";
import CloseIcon from "./close";
import CopyRightIcon from "./copyright";
import EmailIcon from "./email";
import EyeIcon from "./eye";
import GavelIcon from "./gaval";
import InstagramIcon from "./instagram";
import LocationIcon from "./location";
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

    case Icons.Calender:
      return <CalenderIcon {...props} />;

    case Icons.Call:
      return <CallIcon {...props} />;

    case Icons.Care:
      return <CareIcon {...props} />;

    case Icons.Check:
      return <CheckIcon {...props} />;

    case Icons.Close:
      return <CloseIcon {...props} />;

    case Icons.CopyRight:
      return <CopyRightIcon {...props} />;

    case Icons.Email:
      return <EmailIcon {...props} />;

    case Icons.Eye:
      return <EyeIcon {...props} />;

    case Icons.Gavel:
      return <GavelIcon {...props} />;

    case Icons.Instagram:
      return <InstagramIcon {...props} />;

    case Icons.Location:
      return <LocationIcon {...props} />;

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
