import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BreadcrumbGlobal from "../../components/Breadcrumb";
import styles from "../../styles/pages/Projects.module.css";
import axios from "axios";
import Card from "../../components/Card";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className={styles.projects}>
        <BreadcrumbGlobal />
        <Card className={styles.wrap}>
          <h1 className="title">Project Agouti</h1>
          <div>
            <div>
              <h3>
                <b>Intelligent acoustic monitoring made accessible</b>
              </h3>
              <section className="buffer-20"></section>
              <div
                className={styles.img}
                style={{
                  backgroundImage: "url(/images/projects/agouti/4.avif)",
                }}
              ></div>
              <section className="buffer-20"></section>

              <h3>Story</h3>
              <h5>Motivation and Background</h5>
              <p>
                Traditional vision-based wildlife monitoring methods are limited
                by weather conditions, the camera's field of view, the size of
                target organisms, and their proximity. There is great room for
                alternative technologies which can monitor wildlife more
                reliably through other channels: like acoustic monitoring.
              </p>

              <p>
                Acoustic monitoring offers a reliable, low-cost, and scalable
                alternative to monitor wildlife, with the added bonus of
                detecting harmful human activity: whilst poaching and logging
                may be impossible to see, they are much easier to hear.
              </p>

              <p>
                Of course, acoustic monitoring is not a new idea. However, most
                products only record; they don’t analyze. This gives rise to
                huge quantities of raw data which exceeds the manpower of
                researchers to analyse individually. Currently, conservation
                organizations often turn to big tech companies to process their
                raw data. Not only does this place conservationists in the
                passive with a big focus on historical data, but it also
                presents a significant barrier for small-scale, local
                conservation efforts. Moreover, this also hinders the potential
                for acoustic monitoring systems to act as alarms.
              </p>
              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/logo.png)",
                }}
              ></div>
              <section className="buffer-20"></section>

              <h5>Agouti: Our Product</h5>
              <p>
                In light of these considerations, Agouti is an intelligent,
                weatherproof acoustic monitoring device that can be easily
                deployed for the recording and analyzing of audio data.
              </p>
              <p>
                We employ edgeML to automatically tag the microphone data for
                key event classes like insect sounds and birdsongs, human
                activity (e.g. vehicles), and logging (e.g. chainsaw noises),
                storing these tags together with their respective audios for
                human inspection. We also record readings from temperature,
                humidity, and light sensors to link audio with the real world,
                quantifying exactly how the environment affects species'
                behaviours.
              </p>
              <p>
                Agouti broadly addresses "Challenge 2: Wildlife/Biodiversity
                Conservation". Specifically, we tackle two issues at once:
              </p>
              <ul>
                <li>
                  Non-intrusive monitoring of endangered wildlife: Our acoustic
                  recording system takes periodic 5-second recordings of its
                  surrounding soundscape, which is then analysed and stored
                  together with the audio.
                </li>
                <li>
                  Human-wildlife conflict prevention/mitigation: by examaning
                  audio for sounds of suspicious activity (like logging or
                  transport noises), we can detect for illegal activities
                  detrimental to the environment.
                </li>
              </ul>
              <h5>Agouti in a Nutshell</h5>
              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/2.jpg)",
                }}
              ></div>
              <p>
                So, as shown above, Agouti uses the Wio Terminal for gathering
                data and displaying predictions, whilst the Raspberry Pi is used
                for processing and storing the data. We decided to incorporate a
                Raspberry Pi for 2 reasons
              </p>
              <p>
                1. Some simpler models we tried simply cannot perform audio
                analysis with a reasonable degree of accuracy. So we had to use
                an AI model that was too large to fit or run on the Wio, but
                small enough to fit on the RPi.
              </p>
              <p>
                2. The RPi can write to USB storage devices with capacities much
                larger than the 16GB SD card slot of the Wio.
              </p>
              <p>
                Now, let's walk through how we created Agouti. All code and
                other supporting files referenced here can be accessed at our
                GitHub repo, which contains detailed instructions for setting up
                each part of our system.
              </p>
              <h5>Part 1: AI Training</h5>
              <p>
                This was the hardest bit. We tried many model architectures of
                all sizes, and the approach we stuck with in the end is transfer
                learning. As opposed to training a new model, transfer learning
                significantly reduces training time and resources required. By
                taking advantage of the advanced model architecture of a
                pre-trained model, it also results in a greater accuracy.
              </p>
              <p>
                For our training, we used the pre-trained model YAMNet from
                Google. YAMNet analyses the Mel Spectrogram of the input audio
                data, which is a spectrogram with biased sensitivity to
                different frequencies according to human hearing. It is a model
                mainly composed of convolutional layers, trained on Google's
                AudioSet dataset, and outputs an array of scores corresponding
                to each of the 521 pre-defined classes.
              </p>
              <p>
                We then selected another dataset, ESC-50, which mainly comprises
                environmental noises and is hence more suited to our purpose.
                The audio data here comes as 5s 16khz. YAMNet generates
                embeddings from the audio and we train a final classifier on
                those embeddings. Because YAMNet slices audio data into 0.96s
                frames, our 5 second recordings yielded an array of embeddings.
                To get around this, we employed a 128-unit LSTM model that
                recurrently operates on this array of data.
              </p>
              <p>
                To further increase the robustness of our model, we added audio
                augmentations: stretching/compressing of time axis, modulating
                of frequencies, mixing of random noise, harmonic distortion,
                etc. This inevitably decreases the accuracy when training,
                though resulted in a better performance in application.
              </p>
              <p>
                To make the model's final predictions more visual, we also
                created a confusion matrix of what the model mixes up. This is
                shown below:
              </p>
              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage:
                    "url(/images/projects/agouti/confusionmatrix.avif)",
                }}
              ></div>
              <p>
                Once the final classifier layer has been trained, we quantised
                it and turned it into a TFlite model that can be easily run on
                the Pi.
              </p>
              <p>
                You can play with our actual implementation on Google Colab{" "}
                <a
                  className="a white"
                  href="https://colab.research.google.com/github/agouti-acoustics/into-the-wild-resources/blob/main/ai/YAMNET_RPi.ipynb"
                >
                  here.
                </a>
              </p>
              <center>
              <iframe
                width="591"
                height="338"
                src="https://www.youtube.com/embed/xQlsOAYU54s"
                title="Agouti: AI in Action"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              </center>
              
              <section className="buffer-20"></section>
              <h5>Part 2: Wio + RPi Over Serial</h5>
              <p>
                We are immensely grateful to Seeed Studios for supplying us with
                a free SenseCAP K1100 Sensor Prototype Kit. We used the Wio
                terminal to take readings from its builtin light sensor and
                microhpone, as well as an attached Grove SHT40 Temperature and
                Humidity sensor.
              </p>
              <p>
                As you'll recall, the Wio Terminal takes care of all the sensor
                data and records audio through its mic, whilst the Raspberry Pi
                runs a big AI acoustics model (too big to fit on Wio) and
                enables data to be stored onto a USB drive with large storage.
                Communication between the two is achieved using serial:
              </p>
              <ul>
                <li>The Raspberry Pi sends a command to Wio on startup</li>
                <li>
                  Wio grabs sensor data and records 16k frames of audio data,
                  then sends that back to the Pi. The Pi then does a few things:
                </li>
                <li>
                  The Pi measures the time it takes for Wio to get audio data,
                  automatically calibrating for the delay between each frame, so
                  that the Wio returns exactly 16000 frames per second.
                </li>
                <li>
                  The Pi converts raw audio data to a numpy array between -1 and
                  1, then passes this through YAMNet to extract YAMNet
                  predictions and embeddings
                </li>
                <li>
                  The YAMNet embeddings are then passed through our custom model
                  to extract higher level audio information
                </li>
                <li>
                  Predictions from both YAMNet and our custom model are combined
                  to give a final audio tag
                </li>
                <li>
                  If enough time has passed since the last audio was stored or
                  if the audio is tagged as dangerous, the Pi write the audio
                  data together with its predicted tags (as a JSON) to the USB
                </li>
                <li>
                  The Pi sends the predicted audio tag and calibrated delay time
                  back to the Wio
                </li>
                <li>
                  The Wio displays the predicted audio tag, records audio data
                  again (this time using the new delay value), and the loop
                  continues
                </li>
              </ul>

              <p>
                Again, full instructions are available in our GitHub repo for
                setting up the RPi and the Wio, see the bottom of the page.
              </p>

              <h5>Part 3: Casing</h5>
              <p>
                In order to protect the hardwares from external environmental
                damage, we designed a waterproof casing on Onshape, using 3mm
                transparent acrylic boards which are shaped using a laser
                cutter.
              </p>
              <p>
                We decided to use acrylic boards because they are durable and
                lightweight with the added benefits of being easily laser cut.
                The case is also entirely transparent to make sure that the
                screen is visible. In addition, a small window was included in
                the design of the case to connect the temperature and humidity
                sensor (which is outside) to the Wio (which is inside). All the
                base parts of the protective case are designed with finger
                joints, giving strong stability and strength, and maximising the
                adhesiveness of the acrylic cement which is used to connect and
                form the entire box.
              </p>
              <p>And... we've done it!</p>

              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/1.jpg)",
                }}
              ></div>
              <section className="buffer-20"></section>
              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/3.avif)",
                }}
              ></div>
              <section className="buffer-20"></section>
              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/5.avif)",
                }}
              ></div>

              <section className="buffer-20"></section>
              <h3>End Product</h3>

              <p>
                Here is a video of Agouti in action, detecting human noises with
                a plane in the background:
              </p>
              
              <center>
              <iframe
                width="591"
                height="338"
                src="https://www.youtube.com/embed/oUGs_s8gp7g"
                title="Agouti: Product in Action"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen

              ></iframe>
              </center>

              <p>
                Below is a sample of what the JSON file linked to an audio file
                might look like:
              </p>

              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/6.jpg)",
                }}
              ></div>

              <p>
                And... all the audio files have been stored correctly onto the
                USB:
              </p>

              <div
                className={styles.accurateimg}
                style={{
                  backgroundImage: "url(/images/projects/agouti/7.jpg)",
                }}
              ></div>

              <section className="buffer-20"></section>

              <h5>Future Improvements</h5>
              <p>
                In the future, we envision making the following changes to
                improve Agouti:
              </p>

              <ul>
                <li>
                  Support for sending analysed audio tags and sensor data
                  through LoRaWan, so data and warnings can be refreshed
                  instantly (we did have{" "}
                  <a
                    className="a white"
                    href="https://github.com/agouti-acoustics/into-the-wild-resources/blob/main/wio/main_lora/main_lora.ino"
                  >
                    code ready
                  </a>{" "}
                  to send sensor data to Helium over Lora, but there were issues
                  with connecting, perhaps to do with Lora coverage)
                </li>
                <li>Solar panels for longer continuous operation</li>
                <li>
                  Making the ported ML model more accurate, and capable of
                  recognising more audio classes
                </li>
                <li>Use a better mic and sample at higher rate</li>
              </ul>

              <h3>Credits</h3>
              <p>
                This project is a brainchild of <i>Vincent Song</i>. He offers
                thanks to:
              </p>
              <p>
                <i>Dylan Kainth</i> mainly for handling the Wio-side of the
                hardware, for suggesting to use a Pi, and for so many other
                things
              </p>
              <p>
                <i>Alex Yi</i> mainly for helping with the AI, for investigating
                different algorithms, and for coming up with different audio
                augmentations
              </p>
              <p>
                <i>Mark Zeng</i> for designing the case and for doing some
                research on Edge Impulse
              </p>

              <h3>Things used</h3>
              <h5>Hardware</h5>
              <ul>
                <li>
                  <a
                    className="a white"
                    href="https://www.hackster.io/seeed/products/sensecap-k1100-the-sensor-prototype-kit-with-lora-and-ai1?ref=project-df34a4"
                  >
                    Seeed Studio SenseCAP K1100 - The Sensor Prototype Kit with
                    LoRa® and AI
                  </a>
                </li>
                <li>
                  <a
                    className="a white"
                    href="https://www.hackster.io/raspberry-pi/products/raspberry-pi-4-model-b?ref=project-df34a4"
                  >
                    Raspberry Pi 4 Model B
                  </a>
                </li>
              </ul>

              <h5>Software apps and online services</h5>
              <ul>
                <li>
                  <a
                    className="a white"
                    href="https://www.hackster.io/arduino/products/arduino-ide?ref=project-df34a4"
                  >
                    Arduino IDE
                  </a>
                </li>
                <li>
                  <a
                    className="a white"
                    href="https://www.hackster.io/microsoft/products/vs-code?ref=project-df34a4"
                  >
                    Microsoft Visual Studio Code
                  </a>
                </li>
                <li>
                  <a
                    className="a white"
                    href="https://onshape.com/"
                  >
                    Onshape
                  </a>
                </li>
                <li>
                  <a
                    className="a white"
                    href="https://colab.research.google.com/"
                  >
                    Google Colab
                  </a>
                </li>

              </ul>

              <h5>Tools</h5>
              <ul>
                <li>DT Department Laser Cutter</li>
              </ul>

              <h3>
                Links
              </h3>

              <ul>
                <li>
                  <a
                    className="a white"
                    href="https://github.com/agouti-acoustics/into-the-wild-docs"
                  >
                    Project Github
                  </a>
                </li>
              </ul>


            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
