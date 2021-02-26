/** This file will be overwritten by Plasmic. Don't edit. */
import React from "react";
import {ComponentItem} from "./ComponentGallery";
import Homepage from "./components/Homepage";
import Index from "./components/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard";
import TopSection from "./components/TopSection";
import IconLink from "./components/IconLink";
import LinkButton from "./components/LinkButton";
import BaseCard from "./components/BaseCard";
import FaultCard from "./components/FaultCard";
import DescriptiveFaultCard from "./components/DescriptiveFaultCard";
import FaultNameNumber from "./components/FaultNameNumber";
import NeedSupportButton from "./components/NeedSupportButton";
import FixedButton from "./components/FixedButton";
import TestBody from "./components/TestBody";
import HybridCard from "./components/HybridCard";
import Sidebar from "./components/Sidebar";

export const components: Array<ComponentItem> = [
  {Component: Homepage, meta: {"id":"cVmO3LFZfcn","name":"Homepage","params":[{"name":"hover","type":"select","enums":["hover"]}]}},
  {Component: Index, meta: {"id":"UfWUSFNaRL","name":"index","params":[{"name":"unnamedVariant","type":"select","enums":["unnamedVariant"]}]}},
  {Component: Header, meta: {"id":"UJRtJkfrXm","name":"Header","params":[]}},
  {Component: Footer, meta: {"id":"R4ziHmPkBc","name":"Footer","params":[]}},
  {Component: Section, meta: {"id":"fNhXGijyuG","name":"Section","params":[]}},
  {Component: FeatureCard, meta: {"id":"MGsJYpnoFd","name":"Feature Card","params":[]}},
  {Component: TopSection, meta: {"id":"gS7qv8EOST","name":"Top Section","params":[]}},
  {Component: IconLink, meta: {"id":"9G4RRMCUbZ","name":"Icon Link","params":[]}},
  {Component: LinkButton, meta: {"id":"qlrdYbIR1c","name":"Link Button","params":[]}},
  {Component: BaseCard, meta: {"id":"_WrKthJl9L","name":"Base Card","params":[{"name":"baseCardText","type":"string"}]}},
  {Component: FaultCard, meta: {"id":"4CgkUm2pVd","name":"Fault Card","params":[{"name":"highPriority","type":"select","enums":["highPriority"]},{"name":"mediumPriority","type":"select","enums":["mediumPriority"]},{"name":"lowPriority","type":"select","enums":["lowPriority"]},{"name":"noPriority","type":"select","enums":["noPriority"]},{"name":"faultNameStandard","type":"string"},{"name":"faultDescriptionStandard","type":"string"}]}},
  {Component: DescriptiveFaultCard, meta: {"id":"pd3kCWpyEX","name":"Descriptive Fault Card","params":[{"name":"children","type":"string"},{"name":"slot","type":"string"},{"name":"slot2","type":"string"}]}},
  {Component: FaultNameNumber, meta: {"id":"KcSIlmSgOq","name":"Fault Name - Number","params":[{"name":"highPriority","type":"select","enums":["highPriority"]},{"name":"mediumPriority","type":"select","enums":["mediumPriority"]},{"name":"lowPriority","type":"select","enums":["lowPriority"]},{"name":"noPriority","type":"select","enums":["noPriority"]},{"name":"children","type":"string"}]}},
  {Component: NeedSupportButton, meta: {"id":"aahZZJy75V","name":"Need Support Button","params":[]}},
  {Component: FixedButton, meta: {"id":"aKm6LjL0cX","name":"Fixed Button","params":[]}},
  {Component: TestBody, meta: {"id":"kCkGw3kPUN","name":"Test Body","params":[]}},
  {Component: HybridCard, meta: {"id":"SkUaGooM4T","name":"Hybrid Card","params":[{"name":"unnamedVariant","type":"select","enums":["unnamedVariant"]},{"name":"faultNameStandard","type":"string"},{"name":"faultDescriptionStandard","type":"string"},{"name":"children","type":"string"},{"name":"slot","type":"string"},{"name":"slot2","type":"string"}]}},
  {Component: Sidebar, meta: {"id":"K1s8NJKe19","name":"Sidebar","params":[]}}
];