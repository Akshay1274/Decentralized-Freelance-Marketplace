// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

contract FreelanceMarketplace{

struct Job {
    uint256 id;
    string title;
    string description;
    uint256 budget;
    address client;
    address freelancer;
    bool completed;
}

mapping(uint256 => Job) public jobs;

uint256 public jobCount = 0;

   event JobCreated(
    uint256 jobId,
    address client
   );

  function createJob(
    string memory _title,
    string memory _description,
    uint256 _budget
  )
  public {
require (
  bytes(_title).length> 0,
  "Title cannot be empty"
);

require (
  _budget>0,
"Budget must be greater than zero"
);

    jobCount++;

    jobs[jobCount] = Job(
        jobCount,
        _title,
        _description,
        _budget,
        msg.sender,
        address(0),
        false
    );
     emit JobCreated(
          jobCount,
          msg.sender
        );
      }
}
