import React from 'react';

const ProjectDetails = (props) => {
  console.log(props)
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">
                  Project Title - {id}
              </span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi sed tempore non minus nemo. Neque officia, voluptate iure quasi eveniet quisquam nesciunt reprehenderit asperiores minima similique quo. Doloribus saepe quam harum, aut iusto facilis eaque quisquam pariatur laboriosam repellendus sunt quidem id, dolorum, beatae eligendi enim dolore. Est, doloribus. Repellat, corporis facere et ducimus necessitatibus praesentium voluptatem, vero recusandae autem magnam doloribus accusamus quae delectus eum doloremque alias eligendi a nisi cum tempora dignissimos quasi odit. Consectetur fugit iusto culpa, optio ullam in pariatur, doloribus iure aliquid quae, quia officia. Omnis esse iste quos facere! Rem enim ab neque.</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by Shahram Ghassemi</div>
              <div>2nd September, 2am</div>
          </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
