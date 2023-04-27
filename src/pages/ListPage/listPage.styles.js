
import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    border: 2px solid white;
    width: 86%;
    height: 200px;
    border-radius: 10px;
    padding: 50px;
  }

  th {
    border-bottom: 1px solid black;
    padding: 0px 14px;
  }

  td {
    text-align: center;
  }

  tr {
    font-size: 22px;
    height: 5em;
  }

  @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table, thead, tbody, th, td, tr { 
		display: block; 
	}

  table {
    height: 77rem;
    padding: 0px
  }
	
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { 
    border: 1px solid #ccc; 
    height: 15rem; 
    font-size: 17px;
    padding-top: 19px;
  }
	
	td { 
		border: none;
		border-bottom: none; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "City Name"; }
	td:nth-of-type(2):before { content: "State Name"; }
	td:nth-of-type(3):before { content: "Wind Speed"; }
	td:nth-of-type(4):before { content: "Pressure"; }
	td:nth-of-type(5):before { content: "Precip Value"; }
	td:nth-of-type(6):before { content: "Cloud Status"; }
	td:nth-of-type(7):before { content: "Current Temprature"; }
	td:nth-of-type(8):before { content: "Action"; }
}
}  
`;

export const ActionButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 60px;
  width: 120px;

  @media (max-width: 767px) {
    height: 40px;
    width: 90px;
  }
`;
