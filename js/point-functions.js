function reducePointCount(pointCloud,desiredCount){
    let slice;
    let output = [];
    let usedInds = [];

    for (let i = 0; i < pointCloud.length/3; i+=Math.ceil((pointCloud.length/3)/desiredCount)){
        slice = pointCloud.slice(i*3, (i*3)+3)
        output.push(...slice)
        usedInds.push(i)
    }

    let remainder = desiredCount - (output.length/3)

    for (let i =0; i < remainder; i++){
        output.push(...pointCloud.slice((usedInds[i]+1)*3, ((usedInds[i]+1)*3)+3))
    }

    return output
}

function createPointCloud(pointFunction, pointCount) {
    let pointCloud = [];

    if (pointFunction == 'brain') {
        pointCloud = getBrain()
    } else if (pointFunction == 'brains'){
        let oneBrain = reducePointCount(brainVertices, Math.floor((brainVertices.length/3)/numUsers))
        let dim_size = Math.ceil(Math.sqrt(numUsers));
        let delta = (2*INNER_Z)/(dim_size-1)
        let row = 0;
        let col = -1;

        let tempBrain;
        for (let i = 0; i < numUsers; i++) {
            tempBrain = [...oneBrain];
            if (i % dim_size == 0) {
                row = 0;
                col++;
            }
            for (let point = 0; point < (oneBrain.length/3); point++){
                tempBrain[3*point] /= dim_size;
                tempBrain[3*point+1] /= dim_size;
                tempBrain[3*point+2] /= dim_size;

                tempBrain[3*point+1] += -INNER_Z + (delta) * col;
                tempBrain[3*point+2] += -INNER_Z + (delta) * row;
        }
            pointCloud.push(...tempBrain);
            row++
        }
    }
    return pointCloud
}

async function getBrain() {
    const response1 = await fetch('https://raw.githubusercontent.com/GarrettMFlynn/webgl-experiments/main/brain_in_webgl/public/lh.pial.json');
    const json1 = await response1.json();
    const vertexData1 = json1.position

    const response2 = await fetch('https://raw.githubusercontent.com/GarrettMFlynn/webgl-experiments/main/brain_in_webgl/public/rh.pial.json');
    const json2 = await response2.json();
    const vertexData2 = json2.position
    const vertices = [...vertexData1, ...vertexData2]

    for(var i = 0, length = vertices.length; i < length; i++){
        vertices[i] = vertices[i]/75;
        }

    return vertices
}


