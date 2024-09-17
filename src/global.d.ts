declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

interface Obj<T> {
  [key: string]: null | T;
}

// Accordion
interface AccordionDataState {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface AccordionDataProps extends AccordionDataState {
  isSelect: boolean;
  handleSelection: (id: number) => void;
}

// Card
interface CardData {
  title: string;
  url: string;
  author: string;
}

interface CardDataState {
  payload: CardData[];
  error: string;
  isLoading: boolean;
}

interface FetchCardDataProps {
  endPoint: string;
  page: number;
  method: "GET";
}

// Fetch Data
interface DataState<T> {
  payload: null | T;
  error: string;
  isLoading: boolean;
}

// Header
interface NavItemProps {
  href: string;
  text: string;
}

// About page related
type Language = "en" | "hi" | "ur" | "bn";
