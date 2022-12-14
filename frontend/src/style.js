const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-8 px-4",
  paddingY: "sm:py-8 py-4",
  padding: "sm:px-8 px-4 sm:py-8 py-4",

  marginX: "sm:mx-12 mx-6",
  marginY: "sm:my-12 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionCol: `flex flex-col ${styles.paddingY}`,
};

export default styles;
