import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = ({ selectedCurrency }) => {
  const { dispatch, remaining } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const submitEvent = () => {
    if (cost > remaining) {
      alert(`The value cannot exceed remaining funds ${selectedCurrency} ${remaining}`);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div>
        <div className='row'>
          <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">Marketing</option>
              <option value="Sales" name="sales">Sales</option>
              <option value="Finance" name="finance">Finance</option>
              <option value="HR" name="hr">HR</option>
              <option value="IT" name="it">IT</option>
              <option value="Admin" name="admin">Admin</option>
            </select>

            <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
              <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
            </div>
            <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
              <option defaultValue value="Add" name="Add">Add</option>
              <option value="Reduce" name="Reduce">Reduce</option>
            </select>

            <div className='row'>
          <div className='col-md-12' style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <label htmlFor='cost'>Change allocation</label>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>{selectedCurrency}</span> {/* Currency prefix */}
              </div>
              <input
                required='required'
                type='number'
                id='cost'
                value={cost}
                style={{ size: 10 }}
                onChange={(event) => setCost(event.target.value)}
              />
            </div>
          </div>
        </div>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
              Save
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default AllocationForm;
