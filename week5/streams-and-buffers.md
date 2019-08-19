# Streams and Buffers   
## What is buffer
Buffer allocates memory in RAM (temporarily) in order to move it somewhere else , You can think of a buffer like an array of integers, which each represent a byte of data.

![alt](https://i.ibb.co/4K956ty/Screenshot-from-2019-07-29-15-34-46.png)

## Why do we need a buffer?

To execute incoming data chunk at much grater pace than being limited by the access speed of HDD. It is a FIFO algorithm


## What is Streams:
  * Streams are objects that lets you read data from a source or write data to the destination in a continuous fashion

   * differs from the buffer in the way it consumes data chunks. Streams can read/write data chunk by chunk, without buffering the whole file at once
 ![alt](https://i.ibb.co/mGxFwVh/Screenshot-from-2019-07-29-15-39-43.png)



### Stream Benefits:
    - Abstraction for continuous chunking of data.
    - No need to wait for the entire resource to load.



## Types for streams:
    1- Readable Streams:
          readable stream lets you read data from a source.
            ‣ Example: 
                - Request.
                - fs.createReadStream().



    2- Writable Streams: 
        Writable streams let you write data to a destination
            * Examples:
                - Response.
                -  write().

    3- Duplex Stream :
    This is a Stream which can be used for both read and write operations.
