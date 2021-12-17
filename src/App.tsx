import React from 'react';
import './App.scss';
import { Tabs } from './Components/Tabs/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (chosenTab: Tab) => {
    this.setState({ selectedTab: chosenTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
        <article className="App__content">
          {selectedTab.content}
        </article>
      </div>
    );
  }
}

export default App;
