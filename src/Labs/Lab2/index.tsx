import Border from "./Border";
import BsGridSystem from "./BsGridSystem";
import BsGridSystemResponsive from "./BsGridSystemResponsive";
import BsTableResponsive from "./BsTableResponsive";
import ClassSelector from "./ClassSelector";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import DocStruSelector from "./DocuStruSelector";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColor from "./ForegroundColor";
import GridLayout from "./GridLayout";
import IdSelector from "./IdSelector";
import PaddingAndMargin from "./PaddingAndMargin";
import PositionAbsolute from "./PositionAbsolute";
import PositionFixed from "./PositionFixed";
import PositionRelative from "./PositionRelative";
import ReactionIconsSampler from "./ReactIconsSampler";
import ScreenSizeLabel from "./ScreenSizeLabel";
import ZIndex from "./ZIndex";
import "./index.css";
import BsTable from "./BsTable";
import BsList from "./BsList";
import BsHyperlinkList from "./BsHyperlinkList";
import BsForm from "./BsForm";
import BsDropdowns from "./BsDropdowns";
import BsFormSwitch from "./BsFormSwitch";
import BsSliders from "./BsSliders";
import BsAddons from "./BsAddons";
import BsFormResponsive from "./BsFormResponsive";
import NavigateTabs from "./NavigateTabs";
import NavigateCards from "./NavigateCards";
export default function Lab2() {
  return (
    <div className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <IdSelector />
      <ClassSelector />
      <DocStruSelector />
      <ForegroundColor />
      <Border />
      <PaddingAndMargin />
      <Corners />
      <Dimensions />
      <PositionRelative />
      <PositionAbsolute />
      <PositionFixed />
      <ZIndex />
      <Float />
      <GridLayout />
      <Flex />
      <ReactionIconsSampler />
      <h2>Bootstrap</h2>
      <BsGridSystem />
      <BsGridSystemResponsive />
      <ScreenSizeLabel />
      <BsTable />
      <BsTableResponsive />
      <BsList />
      <BsHyperlinkList />
      <BsForm />
      <BsDropdowns />
      <BsFormSwitch />
      <BsSliders />
      <BsAddons />
      <BsFormResponsive />
      <NavigateTabs />
      <NavigateCards />












    </div>
  );
}

