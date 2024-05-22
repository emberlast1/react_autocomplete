import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { peopleFromServer } from './data/people';
import { DropDownMenu } from './components/DropDownMenu';
import { Person } from './types/Person';

export const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        <h1 className="title" data-cy="title">
          {selectedPerson
            ? `${selectedPerson.name} (${selectedPerson.born} - ${selectedPerson.died})`
            : 'No selected person'}
        </h1>

        <DropDownMenu
          persons={peopleFromServer}
          onSelected={setSelectedPerson}
        />
      </main>
    </div>
  );
};
