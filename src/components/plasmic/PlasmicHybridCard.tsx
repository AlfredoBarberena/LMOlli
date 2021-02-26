
    // @ts-nocheck
    /* eslint-disable */
    /* tslint:disable */
    /* prettier-ignore-start */
    /** @jsxRuntime classic */
    /** @jsx createPlasmicElementProxy */
    /** @jsxFrag React.Fragment */
    // This class is auto-generated by Plasmic; please do not edit!
    // Plasmic Project: oAigPHm8VZgjKtAmnNEFkF
    // Component: SkUaGooM4T
    // plasmic-unformatted
    import * as React from "react";
    
    import * as p from  "@plasmicapp/react-web";
    import {hasVariant, classNames, wrapWithClassName, createPlasmicElementProxy, makeFragment, MultiChoiceArg, SingleBooleanChoiceArg, SingleChoiceArg, pick, omit, useTrigger, StrictProps, deriveRenderOpts, ensureGlobalVariants} from "@plasmicapp/react-web";
    import FaultNameNumber from "..//FaultNameNumber";  // plasmic-import: KcSIlmSgOq/component
import NeedSupportButton from "..//NeedSupportButton";  // plasmic-import: aahZZJy75V/component
import FixedButton from "..//FixedButton";  // plasmic-import: aKm6LjL0cX/component
    
    
    import "@plasmicapp/react-web/lib/plasmic.css";
    import  "./plasmic__default_style.css"; // plasmic-import: global/defaultcss
    import  "./plasmic_olli_support.css"; // plasmic-import: oAigPHm8VZgjKtAmnNEFkF/projectcss
    import  "./PlasmicHybridCard.css" // plasmic-import: SkUaGooM4T/css
  
    
    

    
    export type PlasmicHybridCard__VariantMembers = {
      unnamedVariant: "unnamedVariant";
    };
    export type PlasmicHybridCard__VariantsArgs = {
    unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">
  };
    type VariantPropType = keyof PlasmicHybridCard__VariantsArgs;
    export const PlasmicHybridCard__VariantProps = new Array<VariantPropType>("unnamedVariant");
  

    
    export type PlasmicHybridCard__ArgsType = {
    faultNameStandard?: React.ReactNode;
faultDescriptionStandard?: React.ReactNode;
children?: React.ReactNode;
slot?: React.ReactNode;
slot2?: React.ReactNode
  };
    type ArgPropType = keyof PlasmicHybridCard__ArgsType;
    export const PlasmicHybridCard__ArgProps = new Array<ArgPropType>("faultNameStandard","faultDescriptionStandard","children","slot","slot2");
  

    export type PlasmicHybridCard__OverridesType = {
    root?: p.Flex<"div">;
needSupportButton?: p.Flex<typeof NeedSupportButton>;
fixedButton?: p.Flex<typeof FixedButton>;
  };

    
    export interface DefaultHybridCardProps {
      faultNameStandard?: React.ReactNode;
faultDescriptionStandard?: React.ReactNode;
children?: React.ReactNode;
slot?: React.ReactNode;
slot2?: React.ReactNode;
unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">
      className?: string;
    }
  

    
    function PlasmicHybridCard__RenderFunc(
      props: {
        variants: PlasmicHybridCard__VariantsArgs,
        args: PlasmicHybridCard__ArgsType
        overrides: PlasmicHybridCard__OverridesType
        forNode?: string
      }
    ) {
      const {variants, args, overrides, forNode} = props;

      
      const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
      const triggers = {
        hover_root: isRootHover
      };
      
      
      return (
        
  <div
    
    data-plasmic-name={"root"}
    data-plasmic-override={overrides.root}
    data-plasmic-root={true}
    data-plasmic-for-node={forNode}
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "root_reset_oAigPHm8VZgjKtAmnNEFkF", "HybridCard__root__tUrB")}
    data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
          { (triggers.hover_root ? false : true) ? (
  <p.Stack
    as={"div"}
    
    
    
    
    hasGap={true}
    className={classNames("plasmic_default__all", "plasmic_default__div", "HybridCard__box__kePl4", { "HybridCard__box__unnamedVariant__kePl42HhXn": hasVariant(variants, "unnamedVariant", "unnamedVariant") })}
    
    >
          
  <div
    
    
    
    
    
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "HybridCard__box__h1T6R")}
    
    >
          
  <FaultNameNumber
    
    
    
    
    
    
    className={classNames("__wab_instance", "HybridCard__faultNameNumber__beTij")}
    
    >
          <p.PlasmicSlot
      defaultContents={"Fault Name - Number"}
      value={args.faultNameStandard}
      className={classNames("HybridCard__slotFaultNameStandard__g6Gqv", { "HybridCard__slotFaultNameStandard__unnamedVariant__g6Gqv2HhXn": hasVariant(variants, "unnamedVariant", "unnamedVariant") })} />
        </FaultNameNumber>
  
        </div>
  
<p.PlasmicSlot
      defaultContents={"Basic fault description "}
      value={args.faultDescriptionStandard}
       />
        </p.Stack>
  ) : null }
{ (triggers.hover_root ? true : false) ? (
  <div
    
    
    
    
    
    
    className={classNames("plasmic_default__all", "plasmic_default__div", "HybridCard__box___9XhZ")}
    
    >
          
  <FaultNameNumber
    
    
    
    
    
    
    className={classNames("__wab_instance", "HybridCard__faultNameNumber__c6SEb")}
    
    >
          <p.PlasmicSlot
      defaultContents={"Fault Name - Number"}
      value={args.children}
       />
        </FaultNameNumber>
  
<p.PlasmicSlot
      defaultContents={"Basic fault description. Basic fault description. Basic faultdescription."}
      value={args.slot}
       />
<p.PlasmicSlot
      defaultContents={"Advanced fault description. Advanced fault description. Advanced fault description. Advanced fault description. Advanced fault description. Advanced fault description. "}
      value={args.slot2}
       />

  <p.Stack
    as={"div"}
    
    
    
    
    hasGap={true}
    className={classNames("plasmic_default__all", "plasmic_default__div", "HybridCard__box__lOywI")}
    
    >
          
  <NeedSupportButton
    
    data-plasmic-name={"needSupportButton"}
    data-plasmic-override={overrides.needSupportButton}
    
    
    
    className={classNames("__wab_instance", "HybridCard__needSupportButton___3EWa")}
    
    />
  

  <FixedButton
    
    data-plasmic-name={"fixedButton"}
    data-plasmic-override={overrides.fixedButton}
    
    
    
    className={classNames("__wab_instance", "HybridCard__fixedButton__nyVao")}
    
    />
  
        </p.Stack>
  
        </div>
  ) : null }
        </div>
  
      ) as React.ReactElement | null;
    }

    
    const PlasmicDescendants = {
      root: ["root", "needSupportButton", "fixedButton"],
needSupportButton: ["needSupportButton"],
fixedButton: ["fixedButton"],
    } as const;
    type NodeNameType = keyof typeof PlasmicDescendants;
    type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number];
    type NodeDefaultElementType = {
      root: "div";
needSupportButton: typeof NeedSupportButton;
fixedButton: typeof FixedButton
    };
  

    
    type ReservedPropsType = "variants" | "args" | "overrides";
    type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicHybridCard__OverridesType, DescendantsType<T>>;
    type NodeComponentProps<T extends NodeNameType> = (
      // Explicitly specify variants, args, and overrides as objects
      & {
        variants?: PlasmicHybridCard__VariantsArgs;
        args?: PlasmicHybridCard__ArgsType;
        overrides?: NodeOverridesType<T>;
      }
      // Specify variants directly as props
      & Omit<PlasmicHybridCard__VariantsArgs, ReservedPropsType>
      // Specify args directly as props
      & Omit<PlasmicHybridCard__ArgsType, ReservedPropsType>
      // Specify overrides for each element directly as props
      & Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType>
      // Specify props for the root element
      & Omit<Partial<React.ComponentProps<NodeDefaultElementType[T]>>, ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>>
    );
    function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
      type PropsType = NodeComponentProps<NodeName> & {key?: React.Key};
      const func = function<T extends PropsType>(props: T & StrictProps<T, PropsType>) {
        const {variants, args, overrides} = deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHybridCard__ArgProps,
          internalVariantPropNames: PlasmicHybridCard__VariantProps,
        });

        return PlasmicHybridCard__RenderFunc({
          variants, args, overrides, forNode: nodeName
        });
      };
      if (nodeName === "root") {
        func.displayName = "PlasmicHybridCard";
      } else {
        func.displayName = `PlasmicHybridCard.${nodeName}`;
      }
      return func;
    }

    export const PlasmicHybridCard = Object.assign(
      // Top-level PlasmicHybridCard renders the root element
      makeNodeComponent("root"),
      {
        // Helper components rendering sub-elements
        needSupportButton: makeNodeComponent("needSupportButton"),
fixedButton: makeNodeComponent("fixedButton"),

        // Metadata about props expected for PlasmicHybridCard
        internalVariantProps: PlasmicHybridCard__VariantProps,
        internalArgProps: PlasmicHybridCard__ArgProps,
      }
    );
  

    export default PlasmicHybridCard;
    /* prettier-ignore-end */
  