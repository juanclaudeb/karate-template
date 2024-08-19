package performance;

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class PerfTest extends Simulation {

    val protocol = karateProtocol()

    //protocol.nameResolver = (req, ctx) -> req.getHeader("karate-name");
    //protocol.runner.karateEnv("perf");

    val getTagList = scenario("get list of tags").exec(karateFeature("classpath:examples/performance/getTags.feature"))

    setUp(
      getTagList.inject(
        atOnceUsers(1)
        ).protocols(protocol)
    )
}