/* -------------------------- Utility Functions -------------------------- */

function sum(a,b){
    return a + b
}

function stateManager(animState){
    // reset displacement if leaving voltage visualization

    // set up variables for new state
    if (shape_array[state][animState] == 'brain'){
        vertexHome = [...brainVertices];
        ease = true;
        rotation = true;
        zoom = true;
    }

    viewMatrix = mat4.create();
    cameraHome = INITIAL_Z_OFFSET;
    mat4.rotateX(viewMatrix, viewMatrix, Math.PI / 2);
    mat4.rotateY(viewMatrix, viewMatrix, Math.PI / 2);
    mat4.translate(viewMatrix, viewMatrix, [0, 0, cameraCurr]);
    mat4.invert(viewMatrix, viewMatrix);

    if (!rotation){
        diff_x = 0;
        diff_y = 0;
    }
}
