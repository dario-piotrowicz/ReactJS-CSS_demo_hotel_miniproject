const App = () => {
    const header = React.createElement(Header);
    const showcase = React.createElement(Showcase);
    const infoSection = React.createElement(InfoSection);
    const featuresSection = React.createElement(FeaturesSection);
    return React.createElement(
        'div',
        {},
        header,
        showcase,
        infoSection,
        featuresSection
    );
};
