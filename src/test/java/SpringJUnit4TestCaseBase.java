import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * @author GrayFaith
 * @date 2018年9月12日 21:08:08
 * @email wangcangyou@georsoft.com
 * @since JDK8
 */
@ContextConfiguration(locations = {"classpath*:SpringConfigs/Spring-*.xml"})
@RunWith(SpringJUnit4ClassRunner.class)
public class SpringJUnit4TestCaseBase extends AbstractJUnit4SpringContextTests {
}