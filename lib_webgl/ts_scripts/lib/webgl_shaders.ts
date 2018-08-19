var Shaders = {
    'demo-frag':
        'void main(void){\n'                          +
        '	gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n' +
        '}\n',

    'demo-vert':
        'attribute vec3 position;\n'                        +
        'uniform   mat4 mvpMatrix;\n\n'                     +

        'void main(void){\n'                                +
        '	gl_Position = mvpMatrix * vec4(position, 1.0);\n' +
        '}\n',

    'demo1-frag':
        'precision mediump float;\n' +
        'varying vec4 vColor;\n\n'   +

        'void main(void){\n'         +
        '	gl_FragColor = vColor;\n'  +
        '}\n',

    'demo1-vert':
        'attribute vec3 position;\n'                        +
        'attribute vec4 color;\n'                           +
        'uniform   mat4 mvpMatrix;\n'                       +
        'varying vec4 vColor;\n\n'                          +

        'void main(void){\n'                                +
        '	vColor = color;\n'                                +
        '	gl_Position = mvpMatrix * vec4(position, 1.0);\n' +
        '}\n',

    'directionLighting-frag':
        'precision mediump float;\n\n' +

        'varying vec4 vColor;\n\n'     +

        'void main(void){\n'           +
        '	gl_FragColor = vColor;\n'    +
        '}\n',

    'directionLighting-vert':
        'attribute vec3 position;\n'                                             +
        'attribute vec4 color;\n'                                                +
        'attribute vec3 normal;\n\n'                                             +

        'uniform mat4 mvpMatrix;\n'                                              +
        'uniform mat4 invMatrix;\n'                                              +
        'uniform vec3 lightDirection;\n'                                         +
        'varying vec4 vColor;\n\n'                                               +

        'void main(void){\n'                                                     +
        '    vec3 invLight = normalize(invMatrix*vec4(lightDirection,0)).xyz;\n' +
        '    float diffuse = clamp(dot(invLight,normal),0.1,1.0);\n'             +
        '    vColor = color*vec4(vec3(diffuse),1.0);\n'                          +
        '    gl_Position    = mvpMatrix * vec4(position, 1.0);\n'                +
        '}\n',

    'dir_ambient-frag':
        'precision mediump float;\n\n' +

        'varying vec4 vColor;\n\n'     +

        'void main(void){\n'           +
        '	gl_FragColor = vColor;\n'    +
        '}\n',

    'dir_ambient-vert':
        'attribute vec3 position;\n'                                             +
        'attribute vec4 color;\n'                                                +
        'attribute vec3 normal;\n\n'                                             +

        'uniform mat4 mvpMatrix;\n'                                              +
        'uniform mat4 invMatrix;\n'                                              +
        'uniform vec3 lightDirection;\n'                                         +
        'uniform vec4 ambientColor;\n'                                           +
        'varying vec4 vColor;\n\n'                                               +

        'void main(void){\n'                                                     +
        '    vec3 invLight = normalize(invMatrix*vec4(lightDirection,0)).xyz;\n' +
        '    float diffuse = clamp(dot(invLight,normal),0.1,1.0);\n'             +
        '    vColor = color*vec4(vec3(diffuse),1.0) +ambientColor;\n'            +
        '    gl_Position    = mvpMatrix * vec4(position, 1.0);\n'                +
        '}\n',

    'specular-frag':
        'precision mediump float;\n\n' +

        'varying vec4 vColor;\n\n'     +

        'void main(void){\n'           +
        '	gl_FragColor = vColor;\n'    +
        '}\n',

    'specular-vert':
        'attribute vec3 position;\n'                                                 +
        'attribute vec4 color;\n'                                                    +
        'attribute vec3 normal;\n\n'                                                 +

        'uniform mat4 mvpMatrix;\n'                                                  +
        'uniform mat4 invMatrix;\n\n'                                                +

        'uniform vec3 lightDirection;\n'                                             +
        'uniform vec3 eyeDirection;\n'                                               +
        'uniform vec4 ambientColor;\n'                                               +
        'varying vec4 vColor;\n\n'                                                   +

        'void main(void){\n'                                                         +
        '    vec3 invLight = normalize(invMatrix*vec4(lightDirection,0.0)).xyz;\n'   +
        '    vec3 invEye = normalize(invMatrix* vec4(eyeDirection,0.0)).xyz;\n'      +
        '    vec3 halfLE = normalize(invLight+invEye);\n\n'                          +

        '    float diffuse = clamp(dot(invLight,normal),0.0,1.0);\n'                 +
        '    float specular = pow(clamp(dot(normal,halfLE),0.0,1.0),50.0);\n'        +
        '    vec4 light = color*vec4(vec3(diffuse),1.0)+vec4(vec3(specular),1.0);\n' +
        '    vColor = light + ambientColor;\n'                                       +
        '    gl_Position    = mvpMatrix * vec4(position, 1.0);\n'                    +
        '}\n'
}