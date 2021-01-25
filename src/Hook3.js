import React, { useState } from 'react';

const content = [
    {
        tab: "Section 1",
        content: "This is the content of Section 1"
    },
    {
        tab: "Section 2",
        content: "This is the content of Section 2"
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currentIndex],
        chageItem: setCurrentIndex
    }
}

const Hook3 = () => {
    const { currentItem, changeItem } = useTabs(0, content)
    return (
        <div className="box">
            {content.map((section, index) => (
                <button onClick={() => (changeItem(index))}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
};

export default Hook3;